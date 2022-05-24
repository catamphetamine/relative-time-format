import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;