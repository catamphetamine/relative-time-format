import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-GW';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;