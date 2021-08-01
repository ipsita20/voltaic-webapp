import { ErrorType, FieldTypes, FormField } from '../models/util.model';

export const DealInformationLabels: { [key: string]: FormField } = {
  deal_owner_id: {
    fieldLabel: 'Deal Owner',
    fieldName: 'deal_owner_id',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'login_id', mergeValueKey: true },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Deal Owner is required.',
      },
    ],
  },
  contract_price: {
    fieldLabel: 'Contract Price',
    fieldName: 'contract_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Contract Price is required.',
      },
    ],
  },
  account_name: {
    fieldLabel: 'Account Name',
    fieldName: 'account_name',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'Account_Name', valueKey: 'Account_ID', mergeValueKey: true },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Account Name is required.',
      },
    ],
  },
  mpu: {
    fieldLabel: 'MPU',
    fieldName: 'mpu',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'MPU is required.',
      },
    ],
  },
  deal_name: {
    fieldLabel: 'Deal Name',
    fieldName: 'deal_name',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: true,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Deal Name is required.',
      },
    ],
  },
  nest_price: {
    fieldLabel: 'Nest Price',
    fieldName: 'nest_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Nest Price is required.',
      },
    ],
  },
  contact_name: {
    fieldLabel: 'Contact Name',
    fieldName: 'contact_name',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'First_Name', additionalLabelKey: 'Last_Name', valueKey: 'Contact_ID', mergeValueKey: true },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Contact Name is required.',
      },
    ],
  },
  ring_price: {
    fieldLabel: 'Ring Price',
    fieldName: 'ring_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Ring Price is required.',
      },
    ],
  },
  email: {
    fieldLabel: 'Email',
    fieldName: 'email',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: true,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Email is required.',
      },
    ],
  },
  led_price: {
    fieldLabel: 'LED\'s Price',
    fieldName: 'led_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'LED\'s Price is required.',
      },
    ],
  },
  closing_date: {
    fieldLabel: 'Closing Date',
    fieldName: 'closing_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: true,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Closing Date is required.',
      },
    ],
  },
  storedge_inverter: {
    fieldLabel: 'Storedge Inverter',
    fieldName: 'storedge_inverter',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Storedge Inverter is required.',
      },
    ],
  },
  product_id: {
    fieldLabel: 'Products',
    fieldName: 'product_id',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Products is required.',
      },
    ],
  },
  level_two_ev: {
    fieldLabel: 'Level 2 EV',
    fieldName: 'level_two_ev',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Level 2 EV is required.',
      },
    ],
  },
  lead_source_id: {
    fieldLabel: 'Lead Source',
    fieldName: 'lead_source_id',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Lead Source is required.',
      },
    ],
  },
  battery_price: {
    fieldLabel: 'Battery Price',
    fieldName: 'battery_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Battery Price is required.',
      },
    ],
  },
  retention_rep_id: {
    fieldLabel: 'Retention Rep',
    fieldName: 'retention_rep_id',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Retention Rep is required.',
      },
    ],
  },
  hvac_price: {
    fieldLabel: 'HVAC Price',
    fieldName: 'hvac_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'HVAC Price is required.',
      },
    ],
  },
  mentor_id: {
    fieldLabel: 'Mentor',
    fieldName: 'mentor_id',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Mentor is required.',
      },
    ],
  },
  insulation_price: {
    fieldLabel: 'Insulation Price',
    fieldName: 'insulation_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Insulation Price is required.',
      },
    ],
  },
  region: {
    fieldLabel: 'Region',
    fieldName: 'region',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Region is required.',
      },
    ],
  },
  pool_pump_price: {
        fieldLabel: 'Pool Pump Price',
        fieldName: 'pool_pump_price',
        placeholder: '',
        fieldType: FieldTypes.TEXT,
        isRequired: false,
        isDisabled: false,
        options: [],
        errors: [
          {
            type: ErrorType.REQUIRED,
            message: 'Pool Pump Price is required.',
          },
        ],
  },
  qc_ready_to_schedule: {
    fieldLabel: 'QC Ready To Schedule',
    fieldName: 'qc_ready_to_schedule',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'QC Ready To Schedule is required.',
      },
    ],
  },
  quiet_cool_price: {
    fieldLabel: 'Quiet Cool Price',
    fieldName: 'quiet_cool_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Quiet Cool Price is required.',
      },
    ],
  },
  quiet_cool_installed: {
    fieldLabel: 'Quiet Cool Installed',
    fieldName: 'quiet_cool_installed',
    fieldType: FieldTypes.DATE,
    placeholder: 'DD/MM/YYYY',
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Quiet Cool Installed is required.',
      },
    ],
  },
  roof_price: {
    fieldLabel: 'Roof Price',
    fieldName: 'roof_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Roof Price is required.',
      },
    ],
  },
  fan_size: {
    fieldLabel: 'Fan Size',
    fieldName: 'fan_size',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Fan Size is required.',
      },
    ],
  },
  solar_price: {
    fieldLabel: 'Solar Price',
    fieldName: 'solar_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Solar Price is required.',
      },
    ],
  },
  marketer: {
    fieldLabel: 'Marketer',
    fieldName: 'marketer',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Marketer is required.',
      },
    ],
  },
  artificial_grass: {
    fieldLabel: 'Artificial Grass',
    fieldName: 'artificial_grass',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Artificial Grass is required.',
      },
    ],
  },
  stage_id: {
    fieldLabel: 'Stage',
    fieldName: 'stage_id',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Stage is required.',
      },
    ],
  },
  window_price: {
    fieldLabel: 'Window Price',
    fieldName: 'window_price',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Window Price is required.',
      },
    ],
  },
  annual_consumption: {
    fieldLabel: 'Annual Consumption (kWh)',
    fieldName: 'annual_consumption',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Annual Consumption (kWh) is required.',
      },
    ],
  },
  additional_scope: {
    fieldLabel: 'Additional Scope',
    fieldName: 'additional_scope',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Additional Scope is required.',
      },
    ],
  },
  annual_bill: {
    fieldLabel: 'Annual Bill ($)',
    fieldName: 'annual_bill',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Annual Bill is required.',
      },
    ],
  },
  monitoring: {
    fieldLabel: 'Monitoring',
    fieldName: 'monitoring',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Monitoring is required.',
      },
    ],
  },
  energy_consultant_id: {
    fieldLabel: 'Energy Consultant',
    fieldName: 'energy_consultant_id',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Energy Consultant is required.',
      },
    ],
  },
  program: {
    fieldLabel: 'Program',
    fieldName: 'program',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Program is required.',
      },
    ],
  },
  blended_rate: {
    fieldLabel: 'Blended Rate per kWh',
    fieldName: 'blended_rate',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Blended Rate per kWh is required.',
      },
    ],
  },
  escalator: {
    fieldLabel: 'Rate/Term/Escalator',
    fieldName: 'escalator',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: true,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Rate/Term/Escalator is required.',
      },
    ],
  },
  utility_rate_plan: {
    fieldLabel: 'Utility Rate Plan',
    fieldName: 'utility_rate_plan',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Utility Rate Plan is required.',
      },
    ],
  },
  dealer_fee: {
    fieldLabel: 'Dealer Fee',
    fieldName: 'dealer_fee',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Dealer Fee is required.',
      },
    ],
  },
  aps_reservation_number: {
    fieldLabel: 'APS Reservation Number',
    fieldName: 'aps_reservation_number',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'APS Reservation Number is required.',
      },
    ],
  },
  system_size: {
    fieldLabel: 'System Size',
    fieldName: 'system_size',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'System Size is required.',
      },
    ],
  },
  channel_partner: {
    fieldLabel: 'Channel Partner',
    fieldName: 'channel_partner',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Channel Partner is required.',
      },
    ],
  },
  down_payment: {
    fieldLabel: 'Down Payment',
    fieldName: 'down_payment',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Down Payment is required.',
      },
    ],
  },
  home_sq_ft: {
    fieldLabel: 'Home Sq Ft',
    fieldName: 'home_sq_ft',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Home Sq Ft is required.',
      },
    ],
  },
  cash_adders: {
    fieldLabel: 'Cash Adders',
    fieldName: 'cash_adders',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Cash Adders is required.',
      },
    ],
  },
  project_docs: {
    fieldLabel: 'Project Docs',
    fieldName: 'project_docs',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Project Docs is required.',
      },
    ],
  },
  sales_concierge: {
    fieldLabel: 'Sales Concierge',
    fieldName: 'sales_concierge',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Sales Concierge is required.',
      },
    ],
  },
  reschedule_cycle_time: {
    fieldLabel: 'Reschedule Cycle Time',
    fieldName: 'reschedule_cycle_time',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Reschedule Cycle Time is required.',
      },
    ],
  },
  complimentary_concierge: {
    fieldLabel: 'Complimentary Concierge',
    fieldName: 'complimentary_concierge',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Complimentary Concierge is required.',
      },
    ],
  },
  date: {
    fieldLabel: 'Date 17',
    fieldName: 'date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Date 17 is required.',
      },
    ],
  },
  ss_date: {
    fieldLabel: 'SS Date/time',
    fieldName: 'ss_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'SS Date/time is required.',
      },
    ],
  },
  ss_time: {
    fieldLabel: 'SS Date/time',
    fieldName: 'ss_time',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'value' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'SS Date/time is required.',
      },
    ],
  },
  promo: {
    fieldLabel: 'PROMO',
    fieldName: 'promo',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'PROMO is required.',
      },
    ],
  },
  ss_arrival_window: {
    fieldLabel: 'SS Arrival Window',
    fieldName: 'ss_arrival_window',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'SS Arrival Window is required.',
      },
    ],
  },
  utility: {
    fieldLabel: 'Utility',
    fieldName: 'utility',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Utility is required.',
      },
    ],
  },
  ss_date_complete: {
    fieldLabel: 'SS Date Complete',
    fieldName: 'ss_date_complete',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'SS Date Complete is required.',
      },
    ],
  },
  hoa: {
    fieldLabel: 'HOA',
    fieldName: 'hoa',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'HOA is required.',
      },
    ],
  },
  sr_approval: {
    fieldLabel: 'SR Approval',
    fieldName: 'sr_approval',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'SR Approval is required.',
      },
    ],
  },
  hoa_info: {
    fieldLabel: 'HOA INFO',
    fieldName: 'hoa_info',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'HOA INFO is required.',
      },
    ],
  },
  qc_fail_date: {
    fieldLabel: 'QC Fail',
    fieldName: 'qc_fail_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'QC Fail is required.',
      },
    ],
  },
  qc_fail_time: {
    fieldLabel: 'QC Fail',
    fieldName: 'qc_fail_time',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'value' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'QC Fail is required.',
      },
    ],
  },
  ahj: {
    fieldLabel: 'AHJ',
    fieldName: 'ahj',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'AHJ is required.',
      },
    ],
  },
  qc_pass_date: {
    fieldLabel: 'QC Pass',
    fieldName: 'qc_pass_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'QC Pass is required.',
      },
    ],
  },
  qc_pass_time: {
    fieldLabel: 'QC Pass',
    fieldName: 'qc_pass_time',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'value' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'QC Pass is required.',
      },
    ],
  },
  roof_waiver: {
    fieldLabel: 'Roof Waiver',
    fieldName: 'roof_waiver',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Roof Waiver is required.',
      },
    ],
  },
  fl_received_date: {
    fieldLabel: 'FL Received',
    fieldName: 'fl_received_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'FL Received is required.',
      },
    ],
  },
  fl_received_time: {
    fieldLabel: 'FL Received',
    fieldName: 'fl_received_time',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'value' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'FL Received is required.',
      },
    ],
  },
  roofing_required: {
    fieldLabel: 'Roofing Required',
    fieldName: 'roofing_required',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Roofing Required is required.',
      },
    ],
  },
  final_layout: {
    fieldLabel: 'Final Layout',
    fieldName: 'final_layout',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Final Layout is required.',
      },
    ],
  },
  resign_required: {
    fieldLabel: 'Resign Required',
    fieldName: 'resign_required',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Resign Required is required.',
      },
    ],
  },
  fla: {
    fieldLabel: 'FLA',
    fieldName: 'fla',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'FLA is required.',
      },
    ],
  },
  resigned_for_roofing: {
    fieldLabel: 'Resigned for Roofing',
    fieldName: 'resigned_for_roofing',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Resigned for Roofing is required.',
      },
    ],
  },
  ntp: {
    fieldLabel: 'NTP',
    fieldName: 'ntp',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'NTP is required.',
      },
    ],
  },
  roofer: {
    fieldLabel: 'Roofer',
    fieldName: 'roofer',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Roofer is required.',
      },
    ],
  },
  vsa: {
    fieldLabel: 'VSA',
    fieldName: 'vsa',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'VSA is required.',
      },
    ],
  },
  scope_of_reroof: {
    fieldLabel: 'Scope of Reroof',
    fieldName: 'scope_of_reroof',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Scope of Reroof is required.',
      },
    ],
  },
  pr_sow_received: {
    fieldLabel: 'PR SOW Received',
    fieldName: 'pr_sow_received',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'PR SOW Received is required.',
      },
    ],
  },
  roof_pics: {
    fieldLabel: 'Attic / Roof Pics',
    fieldName: 'roof_pics',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Attic / Roof Pics is required.',
      },
    ],
  },
  pr_sow_approved: {
    fieldLabel: 'PR SOW Approved',
    fieldName: 'pr_sow_approved',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'PR SOW Approved is required.',
      },
    ],
  },
  hvac_sow: {
    fieldLabel: 'HVAC SOW',
    fieldName: 'hvac_sow',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'HVAC SOW is required.',
      },
    ],
  },
  permit_submitted: {
    fieldLabel: 'Permit Submitted',
    fieldName: 'permit_submitted',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Permit Submitted is required.',
      },
    ],
  },
  hvac_size: {
    fieldLabel: 'HVAC size',
    fieldName: 'hvac_size',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'HVAC size is required.',
      },
    ],
  },
  mone_paid: {
    fieldLabel: 'M1 Paid',
    fieldName: 'mone_paid',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'M1 Paid is required.',
      },
    ],
  },
  derate: {
    fieldLabel: 'Derate',
    fieldName: 'derate',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Derate is required.',
      },
    ],
  },
  volt_paid_mone_date: {
    fieldLabel: 'Volt Paid M1',
    fieldName: 'volt_paid_mone_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Volt Paid M1 is required.',
      },
    ],
  },
  volt_paid_mone_time: {
    fieldLabel: 'Volt Paid M1',
    fieldName: 'volt_paid_mone_time',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'value' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Volt Paid M1 is required.',
      },
    ],
  },
  mpu_required: {
    fieldLabel: 'MPU Required',
    fieldName: 'mpu_required',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'MPU Required is required.',
      },
    ],
  },
  rep_clawback: {
    fieldLabel: 'Rep Clawback',
    fieldName: 'rep_clawback',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Rep Clawback is required.',
      },
    ],
  },
  mpu_sold: {
    fieldLabel: 'MPU Sold',
    fieldName: 'mpu_sold',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'MPU Sold is required.',
      },
    ],
  },
  volt_clawback: {
    fieldLabel: 'Volt Clawback',
    fieldName: 'volt_clawback',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Volt Clawback is required.',
      },
    ],
  },
  msp_pics: {
    fieldLabel: 'MSP Pics',
    fieldName: 'msp_pics',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'MSP Pics is required.',
      },
    ],
  },
  permit_approved: {
    fieldLabel: 'Permit Approved',
    fieldName: 'permit_approved',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Permit Approved is required.',
      },
    ],
  },
  meter_spot: {
    fieldLabel: 'Meter Spot',
    fieldName: 'meter_spot',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Meter Spot is required.',
      },
    ],
  },
  install_scheduled: {
    fieldLabel: 'Install Scheduled',
    fieldName: 'install_scheduled',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Install Scheduled is required.',
      },
    ],
  },
  relocation_distance: {
    fieldLabel: 'Relocation Distance',
    fieldName: 'relocation_distance',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Relocation Distance is required.',
      },
    ],
  },
  install_completed: {
    fieldLabel: 'Install Completed',
    fieldName: 'install_completed',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Install Completed is required.',
      },
    ],
  },
  mpu_scheduled: {
    fieldLabel: 'MPU Scheduled',
    fieldName: 'mpu_scheduled',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'MPU Scheduled is required.',
      },
    ],
  },
  m_two_paid: {
    fieldLabel: 'M2 Paid',
    fieldName: 'm_two_paid',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'M2 Paid is required.',
      },
    ],
  },
  mpu_complete: {
    fieldLabel: 'MPU Complete',
    fieldName: 'mpu_complete',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'MPU Complete is required.',
      },
    ],
  },
  volt_paid_mtwo_date: {
    fieldLabel: 'Volt Paid M2',
    fieldName: 'volt_paid_mtwo_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Volt Paid M2 is required.',
      },
    ],
  },
  volt_paid_mtwo_time: {
    fieldLabel: 'Volt Paid M2',
    fieldName: 'volt_paid_mtwo_time',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'value' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Volt Paid M2 is required.',
      },
    ],
  },
  rookie_card_vc: {
    fieldLabel: 'Rookie Card VC',
    fieldName: 'rookie_card_vc',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Rookie Card VC is required.',
      },
    ],
  },
  packaging_commission_paid: {
    fieldLabel: 'Packaging Commission Paid',
    fieldName: 'packaging_commission_paid',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Packaging Commission Paid is required.',
      },
    ],
  },
  ub_page_one: {
    fieldLabel: 'UB Page 1',
    fieldName: 'ub_page_one',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'UB Page 1 is required.',
      },
    ],
  },
  fi_scheduled: {
    fieldLabel: 'FI SCHEDULED?',
    fieldName: 'fi_scheduled',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'FI SCHEDULED? is required.',
      },
    ],
  },
  ub_page_two: {
    fieldLabel: 'UB Page 2',
    fieldName: 'ub_page_two',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'UB Page 2 is required.',
      },
    ],
  },
  fi_pass: {
    fieldLabel: 'FI PASS',
    fieldName: 'fi_pass',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'FI PASS is required.',
      },
    ],
  },
  usage_page: {
    fieldLabel: 'Usage Page',
    fieldName: 'usage_page',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Usage Page is required.',
      },
    ],
  },
  pto_submitted_date: {
    fieldLabel: 'PTO Submitted',
    fieldName: 'pto_submitted_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'PTO Submitted is required.',
      },
    ],
  },
  pto_submitted_time: {
    fieldLabel: 'PTO Submitted',
    fieldName: 'pto_submitted_time',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'value' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'PTO Submitted is required.',
      },
    ],
  },
  hic: {
    fieldLabel: 'IA / HIC',
    fieldName: 'hic',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'IA / HIC is required.',
      },
    ],
  },
  pto: {
    fieldLabel: 'PTO',
    fieldName: 'pto',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'PTO is required.',
      },
    ],
  },
  company_cam: {
    fieldLabel: 'Company Cam',
    fieldName: 'company_cam',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Company Cam is required.',
      },
    ],
  },
  vcr_completed: {
    fieldLabel: 'VCR Completed',
    fieldName: 'vcr_completed',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'value', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'VCR Completed is required.',
      },
    ],
  },
  second_marketer: {
    fieldLabel: '2nd Marketer',
    fieldName: 'second_marketer',
    placeholder: '',
    fieldType: FieldTypes.SELECT,
    isRequired: false,
    isDisabled: false,
    options: [],
    optionConfig: { labelKey: 'name', valueKey: 'id' },
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: '2nd Marketer is required.',
      },
    ],
  },
  expected_profit: {
    fieldLabel: 'Expected Profit',
    fieldName: 'expected_profit',
    placeholder: '',
    fieldType: FieldTypes.TEXT,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Expected Profit is required.',
      },
    ],
  },
  retention_date: {
    fieldLabel: 'Retention Date',
    fieldName: 'retention_date',
    placeholder: 'DD/MM/YYYY',
    fieldType: FieldTypes.DATE,
    isRequired: false,
    isDisabled: false,
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Retention Date is required.',
      },
    ],
  },
};
export const DescriptionInformationLabels: { [key: string]: FormField } = {
  description: {
    fieldLabel: 'Description',
    fieldName: 'description',
    placeholder: '',
    fieldType: FieldTypes.TEXTAREA,
    isRequired: false,
    isDisabled: false,
    options: [],
    errors: [
      {
        type: ErrorType.REQUIRED,
        message: 'Description is required.',
      },
    ],
  },
};
