import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kk';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;