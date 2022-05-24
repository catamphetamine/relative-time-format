import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-AO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;