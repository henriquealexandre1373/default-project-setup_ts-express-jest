import TestImport from '@/testImport'

export default class Person {
  sayMyName() {
    TestImport.logImport()
    return 'Henrique'
  }
}

console.log('yarn start is running')
