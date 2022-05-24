import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sk';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;