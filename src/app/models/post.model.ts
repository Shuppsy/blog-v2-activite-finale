export class Post {
  constructor(public title: string, public content: string, public createdAt: number, public loveIts: number) {
    this.createdAt = Date.now();
    this.loveIts = 0;
  }
}
