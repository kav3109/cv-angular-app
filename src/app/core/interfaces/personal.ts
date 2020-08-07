export interface Personal {
  photo: string;
  name: string;
  phone: Array<number>;
  city: string;
  incomes?: number;
  segments?: Array<object>;
  auto?: string;
}
