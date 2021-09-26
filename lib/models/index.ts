export interface IOnboardingModal {
  title: string;
  subtitle: string;
  asset: Asset | string;
}

interface Asset {
  uri: string;
}
