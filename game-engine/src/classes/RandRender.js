export class RandRender {
  constructor(Name, Prob) {
    this.Name = Name;
    this.Prob = Prob;
  }

  getRand() {
    let query = Math.random();
    for(let i = 0; i < this.Prob.length; i++) {
      if(query < this.Prob[i])
        return i;
      query -= this.Prob[i];
    }

  }

  render() {
    return ;
  }
}