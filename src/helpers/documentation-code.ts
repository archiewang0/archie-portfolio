export const archie = `import People from './People'
import FrontendDeveloper from './FrontendDeveloper'

class Archie extends FrontendDeveloper {
  private personalInfo: People;

  constructor(name: string, age: number, gender: string, city: string, skills: string[]) {
    super(skills); 
    this.personalInfo = new People(name, age, gender, city);
  }

  introduceAll(): void {
    this.personalInfo.introduce();
    this.profession();
  }
}

const archie = new Archie('Archie Wang', 28, '男', '台灣', ['HTML', 'CSS', 'JavaScript', 'React']);
archie.introduceAll();
`

export const people = `class People {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string , country: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.country = country;
  }

  introduce(): void {
    console.log('大家好，我叫'+this.name+'，今年'+this.age+'歲，來自'+this.country+'。');
  }
}

export { People }`


export const frontenddeveloper = `class FrontendDeveloper {
  role: string;
  skills: string[];

  constructor(skills: string[]) {
    this.role = '前端工程師';
    this.skills = skills;
  }

  profession(): void {
    console.log('我的職業是'+this.role+'，擅長的技能有：'+this.skills.join('、')+'。');
  }
}

export { FrontendDeveloper }`


export const HomePageCode = `
Hello 👋
I'm Archie Wang 
Frontend Devloper
based in Taiwan.
`