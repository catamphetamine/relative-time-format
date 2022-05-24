import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bg';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;