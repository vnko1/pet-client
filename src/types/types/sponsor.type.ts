export type WorkDays = {
  isOpen: boolean;
  from: string;
  to: string;
  _id: string;
};

export type Sponsor = {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  workDays: WorkDays[] | null;
};
