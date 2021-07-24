import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, Subject } from 'rxjs';
import { GenericService } from '../../service/generic.service';
import { AuthService } from '../../service/auth.service';
import { takeUntil } from 'rxjs/operators';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import Swal from 'sweetalert2';
import { UserDetailsModel } from 'src/app/shared/models/util.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit, OnDestroy {
  public accountId: string = '';
  public accountDetails: any = null;
  private userDetails: UserDetailsModel | null = null;
  private isAdmin: boolean = false;
  public accountDetailsForm: FormGroup;
  private leadSources: any = '';
  private marketers: any = '';
  public leadOwners: any = '';
  private secondMarketers: any = '';
  private energyConsultant: any = '';
  private stages: any = '';
  private accountList: any = [];
  private unsubscribe$: Subject<boolean> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private genericService: GenericService,
    private loaderService: LoaderService
  ) {
    this.accountDetailsForm = this.fb.group({});
    this.userDetails = this.authService.getUserDetails();
    this.isAdmin = this.authService.getIsAdmin();
  }

  ngOnInit(): void {
    this.loaderService.show();
    this.route.queryParams.subscribe((params) => {
      this.accountId = params.accountId;
      this.fetchRequiredDetails();
    });
    this.createForm();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
  private createForm(): void {
    this.accountDetailsForm = this.fb.group({
      Account_Owner_ID: [''],
      Industry: [''],
      Employees: [''],
      Annual_Revenue: [''],
      Phone: [''],
      Account_Owner: [''],
      Account_Name: [''],
      Account_Site: [''],
      Parent_Account_ID: [''],
      Account_Number: [''],
      Account_Type: [''],
      Average_Bill: [''],
      Created_By: [''],
      Modified_By: [''],
      Fax: [''],
      Website: [''],
      Ticker_Symbol: [''],
      Ownership: [''],
      SIC_Code: [''],
      Reschedule_Cycle_Time: [''],
    });
  }
  private fetchRequiredDetails(): void {
    const reqs: Observable<any>[] = [];
    const authorize_token = this.userDetails
      ? this.userDetails.authorize_token
      : null;
    const getSource$ = this.genericService.getSources();
    const getMarketers$ = this.genericService.getMarketers();
    const getSecondMarketers$ = this.genericService.getSecondMarketers();
    const getLeadOwners$ = this.genericService.getLeadOwners();
    const getEnergyConsultant$ = this.genericService.getEnergyConsultant();
    const getStages$ = this.genericService.getStages();
    reqs.push(getSource$);
    reqs.push(getMarketers$);
    reqs.push(getSecondMarketers$);
    reqs.push(getLeadOwners$);
    reqs.push(getEnergyConsultant$);
    reqs.push(getStages$);
    if (authorize_token) {
      const getAccounts$ = this.genericService.getAccounts(
        authorize_token,
        this.isAdmin
      );
      reqs.push(getAccounts$);
    }

    forkJoin(reqs)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (results) => {
          if (results && Array.isArray(results)) {
            if (results[0]) {
              this.leadSources = results[0].message ? results[0].message : '';
            }
            if (results[1]) {
              this.marketers = results[1].message ? results[1].message : '';
            }
            if (results[2]) {
              this.secondMarketers = results[2].message
                ? results[2].message
                : '';
            }
            if (results[3]) {
              this.leadOwners = results[3].message ? results[3].message : '';
            }
            if (results[4]) {
              this.energyConsultant = results[4].message
                ? results[4].message
                : '';
            }
            if (results[5]) {
              this.stages = results[5].message ? results[5].message : '';
            }
            if (results[6]) {
              const accountList = results[6];
              if (
                accountList?.message != 'Server Error' &&
                accountList?.error?.name != 'TokenExpiredError'
              ) {
                this.accountList = accountList.message
                  ? accountList.message
                  : '';
                if (this.accountList && Array.isArray(this.accountList)) {
                  this.accountDetails = this.getAccountDetails(
                    this.accountList,
                    this.accountId
                  );
                  console.log('accountDetails=', this.accountDetails);
                  this.setFormControlValue();
                }
                this.loaderService.hide();
              } else if (accountList?.error?.name === 'TokenExpiredError') {
                const errMsg = 'Session Expired !! Please login again.';
                this.invokeErrorModal(errMsg, true);
              }
            }
          }
        },
        (error) => {
          this.loaderService.hide();
          const errMsg = 'Unable To fetch data. Please try again.';
          this.invokeErrorModal(errMsg, false);
        }
      );
  }

  private invokeErrorModal(errMsg: string, logOutRequired: boolean): void {
    Swal.fire({
      text: errMsg,
      icon: 'error',
      confirmButtonColor: '#A239CA',
      confirmButtonText: 'OK',
    }).then((res) => {
      if (logOutRequired) {
        this.logout();
      }
    });
  }
  private logout() {
    const authorize_token = this.userDetails
      ? this.userDetails.authorize_token
      : null;
    if (authorize_token) {
      this.genericService.logoutApi(authorize_token).subscribe((data: any) => {
        console.log(data);
        sessionStorage.clear();
        this.router.navigate(['/login'], {
          replaceUrl: true,
        });
      });
    }
  }
  private getAccountDetails(accountList: any, accountId: string): any {
    const accountDetails = accountList.find(
      (item: any) => parseInt(item.Account_ID) === parseInt(accountId)
    );
    return accountDetails;
  }
  private setFormControlValue(): void {
    const controls = this.accountDetailsForm.controls;
    if (this.accountDetails) {
      Object.keys(controls).forEach((control: string) => {
        const value = this.accountDetails[control]
          ? this.accountDetails[control]
          : '';
        controls[control].patchValue(value);
      });
    }
  }
  public editSaveField(fieldName: string) {}
}