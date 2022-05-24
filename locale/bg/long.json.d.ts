import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bg';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;