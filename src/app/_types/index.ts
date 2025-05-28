export interface AuthAlertTypes {
  message: string | null;
  status: string;
}

export interface IBreadcrumbProps {
  itemText: string;
  itemLink: string;
  isActive?: boolean;
}
