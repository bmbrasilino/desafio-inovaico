## Descrição do projeto
<p align="justify">O projeto Paciente Care tem como objetivo auxiliar na gestão de consultas.</p>

## Módulos
Os módulos contidos nele são:
- [ ] Gestão de pacientes;
- [ ] Gestão de atendimento;
- [ ] Gestão de anotações durante a consulta.

## :rocket: Deploy em ambiente de desenvolvimento
Faça o clone do projeto e depois acesse a pasta
```bash
git clone https://github.com/bmbrasilino/desafio-inovaico.git
cd desafio-inovaico
```

Instale as dependências do front-end
```bash
npm install -y
```

Aguarde a finalização e faça o build da aplicação
```bash
npm run start
```

Após o servidor no ar, por gentileze acesse o postman. Na endpoint users para que seja criado um usuário,onde o mesmo será utilizado no login da aplicação.
```bash
http://127.0.0.1:3333/users/
{
    "name": "Admin",
    "email": "admin@gmail.com",
    "password": "1234"
}
```


## Licença
The [MIT License]() (MIT)

Bianca Maciel :copyright: 2021
