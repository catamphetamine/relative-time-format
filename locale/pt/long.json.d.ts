import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;