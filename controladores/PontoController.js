const Ponto = require('../Ponto');

const addPonto = async (request, response) =>{

    const nome = request.body.nome;
    const geometria = {type: 'Point', coordinates:[request.body.lat, request.body.lng]}

    console.log(geometria);

    const ponto = Ponto.build({nome, geometria});
    ponto.save().then(()=>{
        response.status(200).send('Ponto salvo!');
    }).catch(err =>{
        response.status(400).send('Falha ao salvar');
    });

};

const getPontos = async(request, response) =>{
    const pessoas = await Ponto.findAll();
    response.status(200).send(pessoas);
};

const sincronizar = async(request, response) =>{
    await Ponto.sync();
    response.status(200).send('<h3>Sincronizado com a base de dados.</h3>');
};

module.exports = {addPonto, sincronizar, getPontos};