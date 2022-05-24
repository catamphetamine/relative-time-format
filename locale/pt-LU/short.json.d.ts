import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-LU';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;