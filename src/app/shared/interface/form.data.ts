export interface FormData {
    controlName: string;
    controlType: string;
    valueType?: string;
    currentValue?: string;
    placeholder?: string;
    autoComplete?: string;
    selected?: string;
    grid?: string;
    style?: Array<{}>;
    password?:string;
    options?: Array<{
      optionName: string;
      value: string;
    }>;
    validators?: {
      required?: boolean;
      minlength?: number;
      maxlength?: number;
    };
  }
  