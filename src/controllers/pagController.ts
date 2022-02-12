import { Request, Response} from 'express';

export const home = (req: Request, res: Response)=>{
    res.send('Home no controller');
    // res.render('pages/home')
}

export const dogs = (req: Request, res: Response)=>{
    res.send('Dogs no controller');
    // res.render('pages/dogs')
}

export const cats = (req: Request, res: Response)=>{
    res.send('Cats no controller');
    // res.render('pages/cats')
}

export const fishes = (req: Request, res: Response)=>{
    res.send('Fishes no controller');
    // res.render('pages/fishes')
}