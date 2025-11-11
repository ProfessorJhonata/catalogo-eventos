import type { Request, Response } from 'express';


function mockResponse() {
    const res = {} as Partial<Response>;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res as Response & {
        status: jest.Mock
        json: jest.Mock;
    }
}




class CriarEventosController {
    async handle(req: Request, res: Response): Promise<Response> {
        // Lógica do controlador (exemplo)
        if (!req.body.titulo ) {
            return res.status(400).json({ error: 'Dados inválidos para criação de evento' });
        };

        return res.status(201).json({ message: 'Evento criado com sucesso' });
    }
}

// SUITE DE TESTES PARA criar-evento-controller.ts
describe('CriarEventoController', () => {
    // TESTA UM EXEMPLO
    it('should creat an innstance', () => {
    });

    it('should handle event creation', async () => {
        const controller = new CriarEventosController();
        const req = {
            body: {
                titulo: "Festival Gastronômico do Centro",
                cat: "Gastronomia",
                data: "2025-09-20",
                hora: "18:00",
                local: "Rua Ponciano, Centro",
                preco: "Gratuito",
                img: "https://douradosagora.com.br/media/posts/390241/dourados-tera-neste-sabado-balaio-festival-com-musica-arte-gastronomia-e-cultura-17522582977313.jpg",
                desc: "Barracas, food trucks e música ao vivo com artistas locais."
            }
         } as unknown as Request; //Mock da requisição com dados inválidos
        const res = mockResponse();

        await controller.handle(req, res);

        
    });

    it('should fall to create event with invalid data', async () => {
        const controller = new CriarEventosController();
        const req = {
            body: {
                titulo: "Festival Gastronômico do Centro",
                cat: "Gastronomia",
                data: "2025-09-20",
                hora: "18:00",
                local: "Rua Ponciano, Centro",
                preco: "Gratuito",
                img: "https://douradosagora.com.br/media/posts/390241/dourados-tera-neste-sabado-balaio-festival-com-musica-arte-gastronomia-e-cultura-17522582977313.jpg",
                desc: "Barracas, food trucks e música ao vivo com artistas locais."
            }
         } as unknown as Request; //Mock da requisição com dados inválidos
        const res = mockResponse();


        await controller.handle(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'Evento criado com sucesso' });

        
    });

    it('should fall to create event with invalid data', async () => {
        const controller = new CriarEventosController();
        const req = {
            body: {
                titulo: "",
                cat: "Gastronomia",
                data: "2025-09-20",
                hora: "18:00",
                local: "Rua Ponciano, Centro",
                preco: "Gratuito",
                img: "https://douradosagora.com.br/media/posts/390241/dourados-tera-neste-sabado-balaio-festival-com-musica-arte-gastronomia-e-cultura-17522582977313.jpg",
                desc: "Barracas, food trucks e música ao vivo com artistas locais."
            }
        } as unknown as Request; //Mock da requisição com dados inválidos
        const res = mockResponse();
    
    
        await controller.handle(req, res);
    
    
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Dados inválidos para criação de evento' });
    })

});