# Welcome to BartVentures

## `Background and Overview`
   BartVentures targets tourists visiting the San Francisco Bay Area. A user can use the app to figure budget. In addition, users can look at the popular attractions near that Bart Station to better help them make up their mind where to explore.

## `Technologies`

   * `MongoDB` for managing our database
   * `Express` for simplifying the server creation process
   * `Node.js` based server
   * `Axios` for fetching information from the backend
   * `JavaScript ES6` for enhancing components
   * `React.js` for updating and rendering proper components
   * `Redux` for maintaining predictable state
   * `MLab` for remote storage
   * `HTML5` for formatting
   * `CSS3` for styling components

## `Functionality and MVP`

### `Map`

We used Google Maps API to include the map on our website. Map shows users how far they can get with their budget on Bart.

![screen shot 2018-09-02 at 3 35 03 pm](https://user-images.githubusercontent.com/25918181/44961464-68cfb300-aec6-11e8-96d2-28aab97db7f7.png)

Here is code snippet showing how we center the map to the area where bart is operating

```
  const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
            defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
            defaultZoom = { 11 }>

            { this.props.bartMarkers.map((bart, index)=> {
              let loc = { lat: bart.lat, lng: bart.lng};
```

### `Markers`

Markers within the map show bart stations and public attractions, such as parks, museums, and tourist areas. Users can get more specific information of a certain public attraction on the right side of the screen and scroll through all the attractions they can visit within the budget range. They only need to enter the budget and choose the starting bart station.

![screen shot 2018-09-02 at 3 41 31 pm](https://user-images.githubusercontent.com/25918181/44961482-bfd58800-aec6-11e8-9231-07d119a4665f.png)


### `User authentication`

BartVentures has a secure frontend to backend user authentication using BCrypt. This is a step towards giving logged users opportunity to comment on certain attractions (which is a future feature).

![screen shot 2018-09-02 at 3 36 35 pm](https://user-images.githubusercontent.com/25918181/44961487-cebc3a80-aec6-11e8-8661-e87fab4820e9.png)

We used `Validator` to check if the email provided by the user is a valid one.

```
if (!Validator.isEmail(data.email)) {
  errors.email = 'Email is invalid';
}
```

## `Future Features`

* Logged Users can comment on attractions
* Display weather within the map
* Display free events within the map
