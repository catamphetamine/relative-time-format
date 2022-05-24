import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ru';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;