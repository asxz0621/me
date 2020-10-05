import React, { Component } from 'react';
// import { Message,Icon } from 'semantic-ui-react';


import faker from 'faker';
console.log(faker)
const data = []
console.log((faker.date.between(2019,2020).getMonth()+1)+''+faker.date.between(2019,2020).getDate());
for (var id = 0; id < 12; id++) {
  var title =  faker.lorem.sentence(10);
  var image = "https://picsum.photos/400/400?random=" + id;
  var author = faker.name.firstName();
  var date = faker.date.between(2019,2020).getFullYear()+'-'+(faker.date.between(2019,2020).getMonth()+1)+'-'+faker.date.between(2019,2020).getDate()
  data.push({
    "title": title,
    "image": image,
    "author": author,
    "date": date
  })
}
class list extends Component {
    render() {
        return (
            <div className="video">
            <ul>
            {data.map((item, key) =>
                <li key={key}>
                  <a target="_blank" href="">
                    <img src={item.image} alt=""></img>
                  <p className='desc'>{item.title}</p>
                  <p className='time'>{item.date}</p>
                  </a>
                </li>
              )}
              
            </ul>
          </div>

        )
    }
}
export default list