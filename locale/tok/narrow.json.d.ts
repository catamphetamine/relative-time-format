import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tok';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;