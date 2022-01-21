const quotes = [
    {
        quote : "니자신을 알라",
        author : "니체",
    },
    {
        quote : "내 죽음을 적에게 알리지 말라",
        author : "이순신",
    },
    {
        quote : "원수를 사랑하라",
        author : "예수",
    },
    {
        quote : "배고프다",
        author : "채승기",
    },
    {
        quote : "내로남불",
        author : "박희태",
    },
    {
        quote : "직접고른 자동차",
        author : "채강윤",
    },
    {
        quote : "나랏말이 중국과달라",
        author : "세종대왕",
    },
    {
        quote : "csk",
        author : "rub33",
    },
    {
        quote : "500원만",
        author : "허경환",
    },
    {
        quote : "구라철",
        author : "김구라",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;