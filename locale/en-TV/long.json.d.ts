import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TV';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;