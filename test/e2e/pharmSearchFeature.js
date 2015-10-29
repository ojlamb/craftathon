describe('Pharmacy finder', function() {

  it('finds pharmacies by name', function() {
    browser.get('http://localhost:8080');

    element(by.model('search.name')).sendKeys('ap');

    expect(element(by.binding('pharmacy.name')).getText()).toEqual('Ap Booth');
  })

  it('finds pharmacies by postcode', function() {
    browser.get('http://localhost:8080');

    element(by.model('search.address')).sendKeys('TD15 1LL');

    expect(element(by.binding('pharmacy.address')).getText()).toEqual('Wells Close Square, Berwick-Upon-Tweed, Northumberland, TD15 1LL');
  })

  it('finds pharmacies by NACS', function() {
    browser.get('http://localhost:8080');

    element(by.model('search.NACS')).sendKeys('FRL14');

    expect(element(by.binding('pharmacy.NACS')).getText()).toEqual('FRL14');
  })

});
