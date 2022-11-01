import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'raj';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;