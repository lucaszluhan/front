const apiGrowdevers = axios.create({
   baseURL: 'https://api.github.com/users/lucaszluhan',
});

apiGrowdevers.get().then((resultado) => console.log(resultado.data));
