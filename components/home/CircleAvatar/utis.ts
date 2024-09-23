const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const CIRCLE_AVATAR_SIZE = 60;

const circleAvatarPossibleSizes = {
  mini: 30,
  small: 50,
  medium: 60,
};

type CircleAvatarSize = keyof typeof circleAvatarPossibleSizes;

export { blurhash, CIRCLE_AVATAR_SIZE, circleAvatarPossibleSizes };
export type { CircleAvatarSize };
