import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ia';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;