import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'dz';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;