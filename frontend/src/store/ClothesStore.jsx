import { makeAutoObservable } from "mobx";

export default class ClothesStore {
  constructor() {
    this._types = [
      { id: 1, name: "Худи" },
      { id: 1, name: "Шапки" },
    ];
    this._clothes = [
      {
        id: 1,
        name: "SWAG",
        price: 10000,
        rating: 5,
        img: "https://avatars.mds.yandex.net/i?id=69d5249753fc04bb956998d65abff3d1f584ed90-6974550-images-thumbs&n=13",
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setClothes(clothes) {
    this._clothes = clothes;
  }

  get types() {
    return this._types;
  }
  get clothes() {
    return this._clothes;
  }
}
