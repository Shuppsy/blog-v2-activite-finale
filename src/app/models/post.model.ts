export class Post {



  constructor(public title: string, public content: string, public created_at: any, public loveIts: number) {
    this.created_at = new Date();
    this.loveIts = 0;
  }
}
