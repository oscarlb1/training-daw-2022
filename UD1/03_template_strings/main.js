function hello(name, lastname, years) {
    // return "Hola " + name + " " + lastname + ", tienes " + years + " años de edad"
    return `Hola ${name} ${lastname}, tienes ${years} años de edad`
}

let result = hello('John', 'Anderton', 35)
if (result != "Hola John Anderton, tienes 35 años de edad") {
    console.log('test fail')
    return
}

result = hello('John', 'Foo', 47)
if (result != "Hola John Foo, tienes 47 años de edad") {
    console.log('test fail')
    return
}

console.log('Test OK')