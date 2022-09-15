import { faker } from "@faker-js/faker";

export function customItem (){
    return{
        title: faker.animal.cetacean(),
        url: faker.image.animals(),
        description: faker.lorem.lines(),
        amount: 666
    }
}

export function invalidItem(){
    return{
        title: faker.animal.cetacean(),
        url: faker.image.animals(),
        description: faker.lorem.lines(),
        amount: 666
    }
}