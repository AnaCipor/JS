import { ROLES } from "./config.js";

function createBasePromptByRole(user){
    if (user.role === ROLES.ADMIN) {
        return `
        Ты - квалифицированный повар, определяющий ингредиенты
        блюда по названию блюда. 
        Тебе дается название желаемого и список
        продуктов, имеющихся в холодильнике. 
        Твоя задача - на основе этих данных составить рекомендации
        для владельца холодильника, какие недостающие продукты надо 
        закупить, чтобы владелец мог приготовить желаемое блюдо.
        Правила:
            -возвращай только список продуктов, которые нужно закупить.
            -не возвращай продукты, не имеющие отношения к данному блюду.
            -не возвращай продукты, которые уже есть в холодильнике.        
        `;
    } 
    if (user.role === ROLES.USER) {
        return `
        Ты - квалифицированный повар, определяющий ингредиенты
        блюда по названию блюда. 
        Тебе дается название желаемого и список
        продуктов, имеющихся в холодильнике. 
        Твоя задача - на основе этих данных составить рекомендации
        для владельца холодильника, какие продукты надо 
        использовать из имеющихся в холодильнике, чтобы владелец мог 
        приготовить желаемое блюдо.
        Правила:
            -возвращай только список продуктов, которые нужно использовать
            из числа имеющихся в холодильнике.
            -не возвращай продукты, не имеющие отношения к данному блюду.
            -не возвращай продукты, которых нет в холодильнике.          
        `;
    }

throw new Error(`Access denied ${user.role}`);
}

export { createBasePromptByRole };


export function formatProductsForPromt(products) {

    return products.map(product => `${product.name}: ${product.count}`).join('\n');
};

export function createPrompt(basePrompt, dishTitle, products) {
    if (!dishTitle.trim()){
        throw new Error(`Dish title is required`);
    };
    if (!Array.isArray(products)) {
        throw new Error(`Products must be an array of ${products}`);
    }

    const productText = formatProductsForPromt(products);
    return `
        ${basePrompt}
        Желаемое блюдо: ${dishTitle}
        Продукты, которые сейчас есть в холодильнике:
        ${productText}
        Дай рекомендации согласно правилам выше.
        `;
}
