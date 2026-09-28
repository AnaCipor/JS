/* 1.Моя аппликация
function deleteProduct(productTitle, user){
    if (canDelete(user)){
        console.log(`${productTitle} успешно удален`);
    } else {
        console.log('Операция запрещена!');
    }
}
// 2.Иммитация стороннего фреймворка для 
// авторизации и аутентификации пользователей
function canDelete(user){
    return user.role ==='ADMIN';
}


*/


// 1.Моя аппликация
function deleteProduct(productTitle, user){
    if (canDelete(user)){
        console.log(`${productTitle} успешно удален`);
    } else {
        console.log('Операция запрещена!');
    }
}
// 2.Иммитация стороннего фреймворка для 
// авторизации и аутентификации пользователей
function canDelete(user){
    return user.role ==='ADMIN';
}
// 3. Иммитация БД
const user = {
    name: 'Alex',
    role: 'USER'
};

const admin = {
    name: 'John',
    role: 'ADMIN'
};

// ВЫЗОВ МОЕЙ АПЛИКАЦИИ
deleteProduct('Banana',user)


/*
function updateProduct(product, newPrice, user) {
    if (canUpdate(user)){
        product.price = newPrice;
    } else {
        console.log("Операция запрещена");        
    }
}
function canUpdate1(user) { // Вер 1 - самая неудачная
    if (user.role==="ADMIN"){
        return true;
    }
     if (user.role==="MANAGER"){
        return true;
    }
    return false;
}
function canUpdate2(user) { // Вер 2 - чуть получше
    if (user.role==="ADMIN" || user.role==="MANAGER"){
        return true;
    }    
    return false;
}
function canUpdate(user) { // Вер 3 - самая удачная
       return ['ADMIN','MANAGER'].includes(user.role);
}


// 3. Иммитация БД
const user = {
    name: 'Alex',
    role: 'USER'
};
const admin = {
    name: 'John',
    role: 'ADMIN'
};

// ВЫЗОВ МОЕЙ АПЛИКАЦИИ
deleteProduct('Banana',user)
*/
