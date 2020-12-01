# Development

<--Organization of Components-->
Components are organized in a fairly straightforward way. I have the app component, in which I create a list of objects 
that represents each card. In the return for the app component I have my filteredList component, and I pass the list of objects 
as a prop to this component. 
In the filteredList Component I have all of the navbar structures and sorting/filtering logic. This component
has a state which stores the Designer filter, Type filter and Price sorting state. In the navbar, 
onSelect I update the state (depending on which button the user selected) and call a function to sort
the list given as a prop based on the current state. I then call my DisplayFilter component and pass it 
the sorted/filtered list as a prop.
In the displayList component I have a grid and I map each object of the given list to a card that displays its elements.
At the end of this component I call my last component and give it the list of items added to the cart as a prop, 
and this component simply adds the items price element and displays the aggregate price.

<--How Data Is Passed Down Through Components-->
The only data I pass through components is the list of objects that are being displayed.
The list is instantiated in the app component, and is then passed to the filteredList component where it is filtered
and sorted based on the current state of the application. 
This filtered and sorted list is then passed to the DisplayList component which maps each object to a card to display it. 
Once an item is added to the cart, a new list which is instantiated in the DisplayList component is appended with that item, 
this list is passed to the sumCart component to aggregate and display the total cost in the cart field.

<--How The User Triggers State Changes-->
The user triggers state changes by selecting different fields in the navbar at the top of the application.
Once the user selects their desired filter or price sorting, a function is called that changes the state associated
with what they selected. Then a function handles the actual sorting/ filtering based on the current state and
passes that filtered/sorted list in to the displayList prop.

