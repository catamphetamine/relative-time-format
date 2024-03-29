import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tt';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;