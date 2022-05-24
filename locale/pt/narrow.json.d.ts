import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;