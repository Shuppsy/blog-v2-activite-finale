export class Post {
  constructor(public title: string, public content: string, public createdAt: number, public loveIts: number, public mailUser: string) {
    this.createdAt = Date.now();
    this.loveIts = 0;
  }
}
