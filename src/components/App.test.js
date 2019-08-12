describe('It takes two numbers, and returns sum', () => {
  it('sums two numbers', () => {
    let a = 2, b =3;
    expect(a+b).toEqual(5);
    expect(a*b).toEqual(6);
  });
});




// onSearchSubmit = async (term) => {
//   const results = await Axios.get('https://api.unsplash.com/search/photos', {
//     params: {query: term},
//     headers:{
//       Authorization: 'Client-ID 732876a859a4e1618782c89125ca06d86eec33aea31b2bf1afb4371411591b5f'
//     }
//   });
//   console.log(this);
//   this.setState({images: results.data.results});