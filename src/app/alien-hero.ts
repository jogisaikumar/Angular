// export class AlienHero {
//     id: number;
//     alienName: string;
//     alienSkill: string;
//     alienStudio: string;
//     constructor() {
//          this.id = 0,
//          this.alienName = '',
//          this.alienSkill = '',
//          this.alienStudio = ''
//     }
// }

export class AlienHero {
    constructor(
        public id: number,
        public alienName: string,
        public alienSkill: string,
        public alienStudio?: string
    ) {}
}
