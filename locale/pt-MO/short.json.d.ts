import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-MO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;