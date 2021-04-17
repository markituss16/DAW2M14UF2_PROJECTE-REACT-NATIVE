import React, {Component} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

interface GameState {
  size: number;
  board: any;
  boardI: any;
  shuffledBoard: any;
  boardScheme: any;
  touches: number;
}

interface GameProps {
  item: any;
}

type Props = GameProps & any;

class GameScreen extends Component<Props, GameState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      size: 16,
      board: [
        {id: 1, name: '1', offset: {top: '150%', left: '100%'}},
        {id: 2, name: '2', offset: {top: '150%', left: 0}},
        {id: 3, name: '3', offset: {top: '150%', left: '-100%'}},
        {id: 4, name: '4', offset: {top: '50%', left: '100%'}},
        {id: 5, name: '5', offset: {top: '50%', left: 0}},
        {id: 6, name: '6', offset: {top: '50%', left: '-100%'}},
        {id: 7, name: '7', offset: {top: '-50%', left: '100%'}},
        {id: 8, name: '8', offset: {top: '-50%', left: 0}},
        {id: 9, name: '9', offset: {top: '-50%', left: '-100%'}},
        {id: 10, name: '10', offset: {top: '-150%', left: '100%'}},
        {id: 11, name: '11', offset: {top: '-150%', left: 0}},
        {id: 12, name: '12', offset: {top: '-150%', left: '-100%'}},
      ],
      boardI: new Array(),
      shuffledBoard: undefined,
      boardScheme: new Array(),
      touches: 0,
    };
  }

  componentDidMount() {
    this.shuffle(this.state.board);
  }

  updateBoardScheme = (
    id: any,
    fourthArray: any,
    firstArray: any,
    secondArray: any,
    thirdArray: any,
  ) => {
    let boardScheme = [...this.state.boardScheme];

    if (fourthArray.includes(12)) {
      fourthArray[fourthArray.indexOf(12)] = 0;
    }
    if (thirdArray.includes(12)) {
      thirdArray[thirdArray.indexOf(12)] = 0;
    }
    if (secondArray.includes(12)) {
      secondArray[secondArray.indexOf(12)] = 0;
    }
    if (firstArray.includes(12)) {
      firstArray[firstArray.indexOf(12)] = 0;
    }

    fourthArray.push(id);
    boardScheme.push(firstArray);
    boardScheme.push(secondArray);
    boardScheme.push(thirdArray);
    boardScheme.push(fourthArray);

    this.setState({
      boardScheme: boardScheme,
    });
  };

  render() {
    let image = this.props.route.params.item.src;
    let firstArray = new Array();
    let secondArray = new Array();
    let thirdArray = new Array();
    let fourthArray = new Array();

    return (
      <View style={{backgroundColor: '#000', flex: 1}}>
        <Image
          source={image}
          style={{
            position: 'absolute',
            height: screenHeight,
          }}
          blurRadius={15}
        />
        <View style={styles.boardContainer}>
          <View style={styles.board}>
            {this.state.shuffledBoard &&
              this.state.shuffledBoard.map((item: any, index: number) => {
                let img = image;
                let id = item.id;

                if (index < this.state.shuffledBoard.length) {
                  if (index >= 0 && index < 3) {
                    firstArray.push(id);
                  } else if (index >= 3 && index < 6) {
                    secondArray.push(id);
                  } else if (index >= 6 && index < 9) {
                    thirdArray.push(id);
                  } else {
                    fourthArray.push(id);
                  }
                  if (index === this.state.shuffledBoard.length - 1) {
                    if (this.state.boardScheme.length === 0) {
                      this.updateBoardScheme(
                        id,
                        fourthArray,
                        firstArray,
                        secondArray,
                        thirdArray,
                      );
                    }
                  }
                  if (item) {
                    return (
                      <View
                        style={{
                          width: '33.333%',
                          height: '25%',
                          borderWidth: 1,
                          borderColor: '#FFF',
                          justifyContent: 'center',
                          alignItems: 'center',
                          overflow: 'hidden',
                        }}>
                        {item.id < 12 ? (
                          <TouchableOpacity
                            key={index}
                            style={{
                              width: '100%',
                              height: '100%',
                              justifyContent: 'center',
                              alignItems: 'center',
                              overflow: 'hidden',
                            }}
                            activeOpacity={0.5}
                            onPress={() => {
                              this.handleOnPress(item);
                            }}>
                            <Image
                              source={img}
                              resizeMode={'contain'}
                              style={[
                                {
                                  height: screenWidth,
                                  width: screenWidth,
                                },
                                item && item.offset,
                              ]}
                            />
                          </TouchableOpacity>
                        ) : (
                          <View
                            key={index}
                            style={{
                              width: '100%',
                              height: '100%',
                              backgroundColor: 'rgba(0,0,0,1)',
                              justifyContent: 'center',
                              alignItems: 'center',
                              overflow: 'hidden',
                            }}
                          />
                        )}
                      </View>
                    );
                  }
                }
              })}
          </View>
        </View>
      </View>
    );
  }

  shuffle(array: any) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
      if (array[i] !== null) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
    this.setState({
      shuffledBoard: array,
    });
  }

  handleOnPress(item: any) {
    console.log(item.id);
    let shuffledBoard = [...this.state.shuffledBoard];
    let boardScheme = [...this.state.boardScheme];
    let touches = this.state.touches;
    touches++;
    var id: any;
    var saveItem: any;
    var saveItem_2: any;
    var saveItem_3: any;
    var saveItem_4: any;
    var saveItemIndex: any;
    var saveItemIndex_2: any;
    var saveItemIndex_3: any;
    var saveItemIndex_4: any;
    let isSwapable = false;

    try {
      if (
        boardScheme[0].includes(item.id) ||
        boardScheme[1].includes(item.id) ||
        boardScheme[2].includes(item.id) ||
        boardScheme[3].includes(item.id)
      ) {
        for (let i = 0; i < boardScheme.length; i++) {
          for (let j = 0; j < boardScheme[i].length; j++) {
            if (boardScheme[i][j] === item.id) {
              id = item.id;

              if (boardScheme[i][j + 1] === 0) {
                isSwapable = true;
              } else if (boardScheme[i][j - 1] === 0) {
                isSwapable = true;
              } else if (boardScheme[i + 1][j] === 0) {
                isSwapable = true;
              } else if (boardScheme[i - 1][j] === 0) {
                isSwapable = true;
              }
            }
          }
        }
      }

      if (isSwapable) {
        shuffledBoard.forEach((item: any, index: number) => {
          if (item.id === id) {
            saveItem = item;
            saveItemIndex = index;
          }
        });
        shuffledBoard.forEach((item: any, index: number) => {
          if (item.id === 12) {
            saveItem_2 = item;
            saveItemIndex_2 = index;
          }
        });
        boardScheme.forEach((item: any, index: number) => {
          if (item.includes(id)) {
            saveItem_3 = item[item.indexOf(id)];
            saveItemIndex_3 = [index, item.indexOf(id)];
          }
        });
        boardScheme.forEach((item: any, index: number) => {
          if (item.includes(0)) {
            saveItem_4 = item[item.indexOf(0)];
            saveItemIndex_4 = [index, item.indexOf(0)];
          }
        });
        shuffledBoard[saveItemIndex] = saveItem_2;
        shuffledBoard[saveItemIndex_2] = saveItem;
        boardScheme[saveItemIndex_3[0]][saveItemIndex_3[1]] = saveItem_4;
        boardScheme[saveItemIndex_4[0]][saveItemIndex_4[1]] = saveItem_3;

        this.setState(
          prevState => ({
            shuffledBoard: shuffledBoard,
            boardScheme: boardScheme,
            touches: touches,
          }),
          () => {
            console.log(this.state.touches);
          },
        );
      }
    } catch (err) {
      console.log(err);
    }

    this.handleLooseGame();
  }

  handleLooseGame() {
    if (this.state.touches === 30) {
      Alert.alert('HAS PERDUT', '', undefined, {
        onDismiss: () => {
          this.props.navigation.pop(2);
        },
      });
    }
  }
}

export default GameScreen;
