import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-KN';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;