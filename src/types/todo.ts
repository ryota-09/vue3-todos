export class Todo {
  constructor(
    private _userId: number,
    private _id: number,
    private _title: string,
    private _completed: boolean
  ) {}

  public get userId(): number {
    return this._userId;
  }

  public set userId(userId: number) {
    this._userId = userId;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get completed(): boolean {
    return this._completed;
  }

  public set completed(completed: boolean) {
    this._completed = completed;
  }
}
