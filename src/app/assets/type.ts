export type typeData = {
    type: string;
    name: string;
}
export interface typeTimer {
    item: typeData;
    expireAt: number;
  }