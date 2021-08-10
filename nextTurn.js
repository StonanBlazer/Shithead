//this is how the game will work

switch (playedCard) {
    case 2:
        //if players = 2: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker
        //if players =< 3: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker
        return 'You can play anything';
    case 3:
        //check for what card was played before
        //if players = 2: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker - depending on card below
        //if players =< 3: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker - depending on card below 
        return 'You must beat the card below'
    case 4:
        //if players = 2: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker
        //if players =< 3: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker
        return 'You must beat a 4'
    case 5:
        //if players = 2: 2, 3, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker
        //if player =< 3: 2, 3, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker
    case 6:
        //if players = 2: 2, 3, 6, 7, 8, 9, 10, J, Q, K, A and Joker
        //if player =< 3: 2, 3, 6, 7, 8, 9, 10, J, Q, K, A and Joker
    case 7:
        //if players = 2: 2, 3, 4, 5, 6, 7 and Joker
        //if player =< 3: 2, 3, 4, 5, 6, 7 and Joker
    case 8:
        //if players = 2: 2, 3, 7, 8, 9, 10, J, Q, K, A and Joker
        //if player =< 3: 2, 3, 7, 8, 9, 10, J, Q, K, A and Joker
    case 9:
        //if players = 2: 2, 3, 7, 8, 9, 10, J, Q, K, A and Joker
        //if player =< 3: 2, 3, 7, 8, 9, 10, J, Q, K, A and Joker
    case 10:
        //if players = 2: pile is discarded
        //if player =< 3: Pile is discarded
    case 'J':
        //if players = 2: 2, 3, 7, 8, 10, J, Q, K, A and Joker
        //if player =< 3: 2, 3, 7, 8, 9, 10, J, Q, K, A and Joker
    case 'Q':
        //if players = 2: 2, 3, 7, 8, 10, Q, K, A and Joker
        //if player =< 3: 2, 3, 7, 8, 9, 10, Q, K, A and Joker
    case 'K':
        //if players = 2: 2, 3, 7, 8, 10, K, A and Joker
        //if player =< 3: 2, 3, 7, 8, 9, 10, K, A and Joker
    case 'A':
        //if players = 2: 2, 3, 7, 8, 10, A and Joker
        //if player =< 3: 2, 3, 7, 8, 9, 10, A and Joker
    case 'Joker':
        //if players = 2: 2, 3, 4, 5, 6, 7, 8, 9 10, J, Q, K, A and Joker
        //if player =< 3: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A and Joker 

}